import { useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { router } from 'expo-router';
import { notificationService } from '../services/notifications';
import { useAuth } from './useAuth';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function usePushNotifications() {
  const { user } = useAuth();
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    if (user) {
      registerForPushNotifications();
      
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log('Notification received:', notification);
      });

      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        const { data } = response.notification.request.content;
        handleNavigation(data);
      });

      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }
  }, [user]);

  const registerForPushNotifications = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') return;
    
    const token = await Notifications.getExpoPushTokenAsync();
    
    if (user) {
      await notificationService.registerDevice({
        userId: user.id,
        token: token.data,
        platform: 'EXPO'
      });
    }
  };

  const handleNavigation = (data: any) => {
    if (!data) return;
    
    switch (data.type) {
      case 'JOB_COMPLETED':
        router.push('/(tabs)/design');
        break;
      case 'TEAM_INVITE':
        router.push('/(tabs)/teams');
        break;
      default:
        router.push('/');
    }
  };
}
