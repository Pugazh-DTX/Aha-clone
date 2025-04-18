const baseUrl = "https://image-resizer-cloud-api.akamaized.net/image";

export const constructImageUrl = (
  imgId: string,
  aspectRatio: string = '16x9', // Default to '16x9' if aspectRatio is not provided
  width: number,
  updatedTime: string = '' // Default to empty string if updatedTime is not provided
): string => {
  if (!imgId) return ''; // safeguard if imgId is not provided
  
  // Prepend "0-" to the aspect ratio to match your expected format
  const formattedAspectRatio = `0-${aspectRatio}`;

  // URL encode parameters to handle any special characters
  const encodedImgId = encodeURIComponent(imgId);
  const encodedAspectRatio = encodeURIComponent(formattedAspectRatio);
  const encodedUpdatedTime = encodeURIComponent(updatedTime);

  // Construct the URL
  return `${baseUrl}/${encodedImgId}/${encodedAspectRatio}.jpg?width=${width}&updatedTime=${encodedUpdatedTime}&dt=Web`;
};
