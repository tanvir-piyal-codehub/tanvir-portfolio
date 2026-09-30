import React, { createContext, useContext, useState } from 'react';

// Default to Tanvir's real GitHub profile photo
const DEFAULT_PHOTO = '/src/assets/images/tanvir_official_photo.jpg';

interface ProfilePhotoContextType {
  photoUrl: string;
  updatePhoto: (file: File) => Promise<void>;
  resetPhoto: () => void;
  isCustom: boolean;
}

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoUrl: DEFAULT_PHOTO,
  updatePhoto: async () => {},
  resetPhoto: () => {},
  isCustom: false,
});

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('tanvir_custom_profile_photo');
      return saved || DEFAULT_PHOTO;
    } catch {
      return DEFAULT_PHOTO;
    }
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem('tanvir_custom_profile_photo'));
    } catch {
      return false;
    }
  });

  const updatePhoto = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            localStorage.setItem('tanvir_custom_profile_photo', result);
            setPhotoUrl(result);
            setIsCustom(true);
            resolve();
          } catch (err) {
            console.error('Failed to save to localStorage:', err);
            setPhotoUrl(result);
            setIsCustom(true);
            resolve();
          }
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem('tanvir_custom_profile_photo');
    } catch {
      // ignore
    }
    setPhotoUrl(DEFAULT_PHOTO);
    setIsCustom(false);
  };

  return (
    <ProfilePhotoContext.Provider value={{ photoUrl, updatePhoto, resetPhoto, isCustom }}>
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
