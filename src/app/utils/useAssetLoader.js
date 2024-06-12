import { useState, useEffect } from 'react';

const useAssetLoader = (minimumTime) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const loadAssets = async () => {
      const assetPromises = [];

      // Load images
      const imagePromises = Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      assetPromises.push(...imagePromises);

      // Load videos
      const videoElements = document.querySelectorAll('video');
      videoElements.forEach((video) => {
        assetPromises.push(
          new Promise((resolve) => {
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA
              resolve();
            } else {
              video.onloadeddata = () => resolve();
            }
          })
        );
      });

      await Promise.all(assetPromises);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumTime - elapsedTime;

      if (remainingTime > 0) {
        setTimeout(() => setIsLoaded(true), remainingTime);
      } else {
        setIsLoaded(true);
      }
    };

    loadAssets();
  }, [minimumTime]);

  return isLoaded;
};

export default useAssetLoader;