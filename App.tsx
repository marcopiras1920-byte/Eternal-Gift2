import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const GOLD = '#C9A84C';
const GOLD_LIGHT = '#E8C97A';
const GOLD_DARK = '#8B6914';
const BLACK = '#0A0A0A';
const DARK_GRAY = '#1A1A1A';
const MEDIUM_GRAY = '#2A2A2A';
const LIGHT_GRAY = '#3A3A3A';
const WHITE = '#FFFFFF';
const WHITE_70 = 'rgba(255,255,255,0.7)';
const WHITE_30 = 'rgba(255,255,255,0.3)';
const WHITE_10 = 'rgba(255,255,255,0.1)';
const GOLD_10 = 'rgba(201,168,76,0.1)';
const GOLD_20 = 'rgba(201,168,76,0.2)';
const GOLD_30 = 'rgba(201,168,76,0.3)';

const GoldDivider = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.dividerLine} />
    <View style={styles.dividerDiamond} />
    <View style={styles.dividerLine} />
  </View>
);

export default function App() {
  const [screen, setScreen] = useState('onboarding');
  const [onboardingPage, setOnboardingPage] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('portfolio');

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const navigateTo = (nextScreen) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setScreen(nextScreen);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleLogin = () => {
    if (!email || !password) {
      setLoginError('Inserisci email e password');
      return;
    }
    setLoginError('');
    navigateTo('dashboard');
  };

  const onboardingData = [
    {
      title: 'Benvenuto in\nAurum Wealth',
      subtitle: 'La piattaforma di private banking riservata a chi non si accontenta del mediocre.',
      icon: '◆',
    },
    {
      title: 'Gestione\nPatrimoniale Elite',
      subtitle: 'Accedi a opportunità di investimento esclusive, riservate ai grandi patrimoni.',
      icon: '◈',
    },
    {
      title: 'Consulenza\nPersonalizzata',