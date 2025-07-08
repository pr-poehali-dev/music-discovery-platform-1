import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Starlight",
    artist: "Muse",
    album: "Black Holes and Revelations",
    duration: "3:58",
    currentTime: "1:23",
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([35]);

  const sidebarItems = [
    { icon: "Home", label: "Главная", active: true },
    { icon: "Search", label: "Поиск", active: false },
    { icon: "Library", label: "Моя библиотека", active: false },
    { icon: "Plus", label: "Создать плейлист", active: false },
    { icon: "Heart", label: "Любимые треки", active: false },
    { icon: "Radio", label: "Радио", active: false },
    { icon: "Users", label: "Друзья", active: false },
    { icon: "Settings", label: "Настройки", active: false },
  ];

  const playlists = [
    "Мой плейлист #1",
    "Рок классика",
    "Для работы",
    "Вечерний чилл",
  ];

  const topTracks = [
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      plays: "1.2M",
      duration: "5:55",
    },
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      plays: "980K",
      duration: "8:02",
    },
    {
      title: "Hotel California",
      artist: "Eagles",
      plays: "756K",
      duration: "6:30",
    },
    {
      title: "Imagine",
      artist: "John Lennon",
      plays: "634K",
      duration: "3:07",
    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      plays: "589K",
      duration: "5:03",
    },
  ];

  const recommendations = [
    {
      title: "Популярные хиты",
      description: "Самые популярные треки недели",
      tracks: 50,
    },
    {
      title: "Новые релизы",
      description: "Свежие треки от любимых исполнителей",
      tracks: 30,
    },
    {
      title: "Рок станция",
      description: "Лучшие рок-композиции всех времён",
      tracks: 100,
    },
    {
      title: "Инди микс",
      description: "Независимые исполнители и новые таланты",
      tracks: 25,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-black/40 backdrop-blur-md border-r border-white/10 p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-music-coral to-music-teal bg-clip-text text-transparent animate-fade-in">
              MusicStream
            </h1>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start hover:bg-white/10 transition-colors ${
                  item.active ? "bg-[#FF6B6B] text-white" : "text-gray-300"
                }`}
              >
                <Icon name={item.icon} className="mr-3" size={18} />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              ПЛЕЙЛИСТЫ
            </h3>
            <div className="space-y-2">
              {playlists.map((playlist, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:bg-white/10 transition-colors"
                >
                  {playlist}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input
                    placeholder="Поиск треков, исполнителей, альбомов..."
                    className="w-96 bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <Icon
                    name="Search"
                    className="absolute right-3 top-3 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300">
                  <Icon name="Bell" size={18} />
                </Button>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-[#4ECDC4] text-white">
                    ЮР
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto p-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Добро пожаловать, Юра!
              </h2>
              <p className="text-gray-400">
                Откройте для себя новую музыку и наслаждайтесь любимыми треками
              </p>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Рекомендации для вас
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {recommendations.map((rec, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <CardHeader className="pb-3">
                      <div className="w-full h-32 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg mb-3 flex items-center justify-center">
                        <Icon name="Music" size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-white text-sm">
                        {rec.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-400 text-xs mb-2">
                        {rec.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-white/10 text-gray-300"
                      >
                        {rec.tracks} треков
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Top Charts */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Топ чарты</h3>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-0">
                  {topTracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold text-[#FF6B6B] w-6">
                          {index + 1}
                        </span>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#45B7D1] rounded-lg flex items-center justify-center">
                          <Icon name="Music" size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">
                            {track.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {track.artist}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge
                          variant="outline"
                          className="border-white/20 text-gray-300"
                        >
                          {track.plays} прослушиваний
                        </Badge>
                        <span className="text-sm text-gray-400">
                          {track.duration}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white"
                        >
                          <Icon name="Heart" size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white"
                        >
                          <Icon name="MoreHorizontal" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-4 w-1/3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center">
              <Icon name="Music" size={24} className="text-white" />
            </div>
            <div>
              <h4 className="font-medium text-white">{currentTrack.title}</h4>
              <p className="text-sm text-gray-400">{currentTrack.artist}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Heart" size={16} />
            </Button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 w-1/3">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Shuffle" size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="SkipBack" size={18} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/80 w-10 h-10 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={18} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="SkipForward" size={18} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Repeat" size={16} />
              </Button>
            </div>
            <div className="flex items-center space-x-3 w-full max-w-md">
              <span className="text-xs text-gray-400">
                {currentTrack.currentTime}
              </span>
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-gray-400">
                {currentTrack.duration}
              </span>
            </div>
          </div>

          {/* Volume */}
          <div className="flex items-center space-x-3 w-1/3 justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Volume2" size={16} />
            </Button>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
