Looking at this request, I need to create a comprehensive, visually stunning gifting app with multiple screens and features. Let me plan the architecture:

**Screens needed:**
1. Dashboard/Home with Gift Timeline
2. Recipients/Profiles management
3. Subscription Plans
4. AI Concierge suggestions
5. Last Minute Emergency
6. Gift approval workflow
7. Personalization (card + packaging)

**Key design decisions:**
- Color palette: #0A0A0A (Night Black), #C9A84C (Satin Gold), #F5F0E8 (Cream White)
- Tab navigation for main sections
- Stack navigation for details
- Smooth animations with Animated API
- Mock data for all profiles and gifts

Let me build this comprehensively in a single App.tsx file.

```tsx
import React, { useState, useRef, useEffect } from 'react';
// ... comprehensive implementation
```

I'll create all the screens with proper navigation, animations, and mock data. This will be a large but complete implementation.

<br>

```tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
  TextInput,
  Modal,
  Image,
  FlatList,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

// ─── COLORS ───────────────────────────────────────────────────────────────────
const C = {
  black: '#0A0A0A',
  blackSoft: '#141414',
  blackCard: '#1A1A1A',
  blackBorder: '#2A2A2A',
  gold: '#C9A84C',
  goldLight: '#E8C96A',
  goldDim: '#8A6F2E',
  cream: '#F5F0E8',
  creamDim: '#C8C0B0',
  creamMuted: '#8A8070',
  white: '#FFFFFF',
  error: '#E85555',
  success: '#4CAF6A',
  purple: '#8B5CF6',
};

// ─── MOCK DATA ─────────────────────────────────────────────────────────────────
const RECIPIENTS = [
  {
    id: '1',
    name: 'Sofia Ricci',
    relation: 'Fidanzata',
    avatar: '💑',
    birthday: '14 Feb',
    nextGift: '2025-02-14',
    budget: 'Luxury',
    budgetRange: '€500–€1500',
    tags: ['Gioielli', 'Profumi', 'Esperienze', 'Moda'],
    preferences: { style: 'Elegante', colors: ['Oro', 'Rosa'], brands: ['Chanel', 'Tiffany', 'Dior'] },
    frequency: 'Mensile',
    totalGifts: 12,
    spending: '€4,800',
  },
  {
    id: '2',
    name: 'Marco Rossi',
    relation: 'Migliore Amico',
    avatar: '🤝',
    birthday: '3 Lug',
    nextGift: '2025-03-15',
    budget: 'Premium',
    budgetRange: '€100–€300',
    tags: ['Tech', 'Sport', 'Gastronomia', 'Libri'],
    preferences: { style: 'Casual', colors: ['Nero', 'Blu'], brands: ['Apple', 'Nike', 'Samsung'] },
    frequency: 'Trimestrale',
    totalGifts: 5,
    spending: '€920',
  },
  {
    id: '3',
    name: 'Anna & Luigi',
    relation: 'Genitori',
    avatar: '👨