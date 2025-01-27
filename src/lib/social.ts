export type SocialImage = {
  url?: string;
  ipfs_cid?: string;
};

export type Profile = {
  name?: string;
  description?: string;
  image?: SocialImage;
  backgroundImage?: SocialImage;
};

const API_SERVER = 'https://api.near.social';

export async function getProfile(accountId: string): Promise<Profile | null> {
  const keys = [`${accountId}/profile/**`];
  
  try {
    const response = await fetch(`${API_SERVER}/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keys,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data && data[accountId] && data[accountId].profile) {
      return data[accountId].profile as Profile;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export const getImageUrl = (image: SocialImage): string => {
  if (image?.url) return image.url;
  if (image?.ipfs_cid) return `https://ipfs.near.social/ipfs/${image.ipfs_cid}`;
  return "";
};
