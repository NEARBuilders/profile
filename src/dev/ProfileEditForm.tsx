import React, { useState } from "react";
import { Profile as ProfileType } from "../lib/social";

type ProfileEditFormProps = {
  profile: ProfileType | null;
  onSave: (profile: ProfileType) => void;
  onCancel: () => void;
};

export function ProfileEditForm({ profile, onSave, onCancel }: ProfileEditFormProps) {
  const [formData, setFormData] = useState<ProfileType>({
    name: profile?.name || "",
    description: profile?.description || "",
    image: profile?.image || { url: "" },
    backgroundImage: profile?.backgroundImage || { url: "" },
    linktree: profile?.linktree || {},
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ProfileType
  ) => {
    if (field === "image" || field === "backgroundImage") {
      setFormData({
        ...formData,
        [field]: { url: e.target.value },
      });
    } else if (field === "linktree") {
      const [platform] = e.target.name.split(".");
      setFormData({
        ...formData,
        linktree: {
          ...formData.linktree,
          [platform]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Basic Info */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description (Markdown supported)
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange(e, "description")}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Images */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Profile Image URL
        </label>
        <input
          type="text"
          value={formData.image?.url}
          onChange={(e) => handleInputChange(e, "image")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Background Image URL
        </label>
        <input
          type="text"
          value={formData.backgroundImage?.url}
          onChange={(e) => handleInputChange(e, "backgroundImage")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Social Links */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Social Links</h3>
        {["github", "twitter", "telegram", "linkedin", "website"].map(
          (platform) => (
            <div key={platform}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {platform}
              </label>
              <input
                type="text"
                name={`${platform}`}
                value={formData.linktree?.[platform] || ""}
                onChange={(e) => handleInputChange(e, "linktree")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          )
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
