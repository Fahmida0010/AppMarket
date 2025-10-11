import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Apple, Play, Star, Download, Activity, Search, XCircle, Loader, Info, ArrowLeft, ArrowDown, ArrowUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; 

 export const APP_DATA = [
  { "id": 101, "title": "ChatSphere", "icon": "💬", "companyName": "CommuniTech", "description": "Real-time messaging with end-to-end encryption, supporting voice, video calls, and group chats.", "size": 55.2, "reviews": 15200, "ratingAvg": 4.5, "downloads": 510000, "color": "indigo" },
  { "id": 102, "title": "PixelPro", "icon": "📸", "companyName": "Artisanal Devs", "description": "Professional photo editing tools and AI-powered filters for stunning visual transformations.", "size": 128.9, "reviews": 22450, "ratingAvg": 4.8, "downloads": 890000, "color": "yellow" },
  { "id": 103, "title": "MoneyWise", "icon": "💸", "companyName": "FinTrack Solutions", "description": "Budgeting and expense tracking made easy with bank sync and customizable financial reports.", "size": 32.1, "reviews": 8900, "ratingAvg": 4.2, "downloads": 320000, "color": "green" },
  { "id": 104, "title": "Velocity Rush", "icon": "🏎️", "companyName": "GameCraft Studios", "description": "High-octane 3D car racing experience with competitive multiplayer modes and weekly tournaments.", "size": 350.5, "reviews": 55000, "ratingAvg": 4.6, "downloads": 2500000, "color": "red" },
  { "id": 105, "title": "FocusFlow", "icon": "🧘", "companyName": "Productivity Hub", "description": "Pomodoro timer and task management system to help you stay focused and minimize distractions.", "size": 18.0, "reviews": 6100, "ratingAvg": 4.7, "downloads": 150000, "color": "blue" },
  { "id": 106, "title": "CloudCast", "icon": "🌦️", "companyName": "AeroData Inc.", "description": "Accurate hyperlocal weather forecasts with interactive radar maps and severe weather alerts.", "size": 22.3, "reviews": 10500, "ratingAvg": 4.3, "downloads": 400000, "color": "cyan" },
  { "id": 107, "title": "RhythmBox", "icon": "🎵", "companyName": "Sonic Dev", "description": "Offline music player with customizable EQ, high-fidelity audio support, and playlist creation.", "size": 40.7, "reviews": 18900, "ratingAvg": 4.4, "downloads": 650000, "color": "purple" },
  { "id": 108, "title": "PageTurner", "icon": "📚", "companyName": "Literary Soft", "description": "Ebook reader with a vast digital library, adjustable fonts, and personalized reading recommendations.", "size": 60.1, "reviews": 9200, "ratingAvg": 4.1, "downloads": 300000, "color": "emerald" },
  { "id": 109, "title": "FitPath", "icon": "💪", "companyName": "Healthware", "description": "Personalized workout plans and tracking, integrated with smart wearables and nutritional guides.", "size": 70.8, "reviews": 25000, "ratingAvg": 4.9, "downloads": 1200000, "color": "pink" },
  { "id": 110, "title": "Voyager Maps", "icon": "🗺️", "companyName": "GeoNav", "description": "Offline navigation and detailed street view, perfect for travelers and daily commuters.", "size": 95.5, "reviews": 31000, "ratingAvg": 4.5, "downloads": 1800000, "color": "amber" },
  { "id": 111, "title": "SecureVault", "icon": "🔑", "companyName": "Cypher Solutions", "description": "A secure password manager using AES-256 encryption with cloud synchronization.", "size": 15.0, "reviews": 4500, "ratingAvg": 4.7, "downloads": 90000, "color": "gray" },
  { "id": 112, "title": "CodeEditorX", "icon": "💻", "companyName": "DevTools Co.", "description": "Lightweight mobile code editor supporting syntax highlighting for over 50 languages.", "size": 88.3, "reviews": 11200, "ratingAvg": 4.3, "downloads": 450000, "color": "teal" },
  { "id": 113, "title": "RecipeGenie", "icon": "🍲", "companyName": "Foodie Tech", "description": "AI-powered recipe generator based on ingredients you already have at home.", "size": 45.1, "reviews": 7500, "ratingAvg": 4.6, "downloads": 210000, "color": "orange" },
  { "id": 114, "title": "SkySight", "icon": "🔭", "companyName": "AstroApps", "description": "Stargazing guide and real-time map of constellations and planets.", "size": 150.9, "reviews": 18000, "ratingAvg": 4.9, "downloads": 750000, "color": "lime" },
  { "id": 115, "title": "HomePlanner", "icon": "🏠", "companyName": "BuildSoft", "description": "3D home layout design tool for architects and interior decorators.", "size": 200.0, "reviews": 9800, "ratingAvg": 4.0, "downloads": 350000, "color": "fuchsia" },
  { "id": 116, "title": "AudioTune", "icon": "🎤", "companyName": "SoundWave Inc.", "description": "Advanced audio recording and mixing studio for aspiring musicians.", "size": 250.4, "reviews": 14500, "ratingAvg": 4.4, "downloads": 600000, "color": "violet" },
  { "id": 117, "title": "MarketWatch", "icon": "📈", "companyName": "StockStream", "description": "Real-time stock market tracking and investment portfolio analysis.", "size": 50.5, "reviews": 35000, "ratingAvg": 4.7, "downloads": 1500000, "color": "rose" },
  { "id": 118, "title": "LanguagePal", "icon": "🗣️", "companyName": "LinguaDev", "description": "Interactive language learning app with conversational AI tutors.", "size": 75.2, "reviews": 16000, "ratingAvg": 4.5, "downloads": 800000, "color": "sky" },
  { "id": 119, "title": "SketchPad", "icon": "🖌️", "companyName": "VisualCraft", "description": "Digital sketching and painting application with layer support and various brushes.", "size": 110.8, "reviews": 19000, "ratingAvg": 4.6, "downloads": 950000, "color": "indigo" },
  { "id": 120, "title": "TaskMaster", "icon": "✅", "companyName": "Efficiently Co.", "description": "A powerful to-do list and habit tracker utilizing Kanban boards.", "size": 28.9, "reviews": 5100, "ratingAvg": 4.3, "downloads": 180000, "color": "teal" }
];
 export const CHART_DATA = [
    { month: 'Jan', rating: 4.1 },
    { month: 'Feb', rating: 4.3 },
    { month: 'Mar', rating: 4.0 },
    { month: 'Apr', rating: 4.5 },
    { month: 'May', rating: 4.8 },
    { month: 'Jun', rating: 4.6 },
];
export const formatCount = (count) => {
  if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
  if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
  return count.toString();
};

export default APP_DATA;
