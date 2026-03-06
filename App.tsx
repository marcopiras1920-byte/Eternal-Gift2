import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
  Image,
  Modal,
  Switch,
} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);

const MOCK_DATA = {
  user: {
    name: 'Marco Rossi',
    email: 'marco.rossi@email.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    level: 'Intermedio',
    goals: 47,
    matches: 32,
    wins: 19,
  },
  matches: [
    {
      id: '1',
      title: 'Calcetto @ Centro Sportivo Nord',
      date: 'Sab 14 Giu',
      time: '20:00',
      location: 'Via Roma 12, Milano',
      spots: 2,
      totalSpots: 10,
      price: 8,
      organizer: 'Luca B.',
      players: [
        { id: '1', name: 'Luca B.', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: '2', name: 'Marco R.', avatar: 'https://i.pravatar.cc/150?img=2' },
        { id: '3', name: 'Davide M.', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: '4', name: 'Simone P.', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: '5', name: 'Giorgio F.', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: '6', name: 'Matteo V.', avatar: 'https://i.pravatar.cc/150?img=6' },
        { id: '7', name: 'Andrea L.', avatar: 'https://i.pravatar.cc/150?img=7' },
        { id: '8', name: 'Paolo C.', avatar: 'https://i.pravatar.cc/150?img=8' },
      ],
      level: 'Intermedio',
      color: '#6366f1',
    },
    {
      id: '2',
      title: 'Partitella 5vs5 @ Arena Sport',
      date: 'Dom 15 Giu',
      time: '18:30',
      location: 'Viale Monza 45, Milano',
      spots: 4,
      totalSpots: 10,
      price: 6,
      organizer: 'Filippo T.',
      players: [
        { id: '1', name: 'Filippo T.', avatar: 'https://i.pravatar.cc/150?img=9' },
        { id: '2', name: 'Riccardo S.', avatar: 'https://i.pravatar.cc/150?img=10' },
        { id: '3', name: 'Alessandro N.', avatar: 'https://i.pravatar.cc/150?img=11' },
        { id: '4', name: 'Federico G.', avatar: 'https://i.pravatar.cc/150?img=13' },
        { id: '5', name: 'Lorenzo B.', avatar: 'https://i.pravatar.cc/150?img=14' },
        { id: '6', name: 'Stefano R.', avatar: 'https://i.pravatar.cc/150?img=15' },
      ],
      level: 'Principiante',
      color: '#10b981',
    