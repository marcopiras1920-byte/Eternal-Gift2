import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const COLORS = {
  black: '#0A0A0A',
  darkGray: '#1A1A1A',
  gold: '#C9A84C',
  goldLight: '#E8C97A',
  goldDark: '#A07830',
  white: '#FFFFFF',
  offWhite: '#F5F0E8',
  gray: '#888888',
  lightGray: '#2A2A2A',
};

const onboardingSlides = [
  {
    id: '1',
    title: 'Eleganza',
    subtitle: 'Un servizio su misura per chi non accetta compromessi. Ogni dettaglio curato con raffinatezza assoluta.',
    icon: '✦',
  },
  {
    id: '2',
    title: 'Puntualità',
    subtitle: 'Il tempo è il lusso più prezioso. I nostri professionisti rispettano ogni impegno con precisione svizzera.',
    icon: '◈',
  },
  {
    id: '3',
    title: 'Eternal Gift',
    subtitle: 'Regala un\'esperienza indimenticabile. Un dono che trascende il tempo e rimane nel cuore per sempre.',
    icon: '◆',
  },
];

const profiles = [
  {
    id: '1',
    name: 'Sofia',
    surname: 'Esposito',
    role: 'Senior Stylist',
    rating: 4.9,
    reviews: 312,
    specialty: 'Colorazione & Tagli di Alta Moda',
    availability: 'Disponibile Oggi',
    price: '€€€',
    initials: 'SE',
  },
  {
    id: '2',
    name: 'Marco',
    surname: 'Ricci',
    role: 'Master Barber',
    rating: 4.8,
    reviews: 284,
    specialty: 'Barba & Grooming di Lusso',
    availability: 'Disponibile Domani',
    price: '€€€',
    initials: 'MR',
  },
  {
    id: '3',
    name: 'Giulia',
    surname: 'Ferrara',
    role: 'Nail Artist',
    rating: 5.0,
    reviews: 198,
    specialty: 'Nail Art & Manicure Premium',
    availability: 'Disponibile Oggi',
    price: '€€',
    initials: 'GF',
  },
  {
    id: '4',
    name: 'Alessandro',
    surname: 'Conti',
    role: 'Skin Specialist',
    rating: 4.9,
    reviews: 156,
    specialty: 'Trattamenti Viso Esclusivi',
    availability: 'Disponibile Oggi',
    price: '€€€€',
    initials: 'AC',
  },
  {
    id: '5',
    name: 'Valentina',
    surname: 'Romano',
    role: 'Makeup Artist',
    rating: 4.7,
    reviews: 423,
    specialty: 'Trucco Sposa & Alta Cerimonia',
    availability: 'Su Appuntamento',
    price: '€€€',
    initials: 'VR',
  },
];

function GoldDivider() {
  return (
    <View style={styles.goldDividerContainer}>
      <View style={styles.goldDividerLine} />
      <Text style={styles.goldDividerDiamond}>◆</Text>