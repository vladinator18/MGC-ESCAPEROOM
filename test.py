import os

# Define the exact path to your TETO audio folder
audio_dir = r"AUDIO/TETO-AUDIO"

if not os.path.exists(audio_dir):
    print(f"Error: Directory '{audio_dir}' could not be found.")
    print("Please make sure you are running this script from your root project folder.")
else:
    print(f"Scanning and cleaning audio files in: {audio_dir}\n")
    
    count = 0
    for filename in os.listdir(audio_dir):
        if filename.endswith(".wav"):
            # Clean up any trailing or leading whitespace/hidden formatting artifacts
            cleaned_name = filename.strip()
            
            old_path = os.path.join(audio_dir, filename)
            new_path = os.path.join(audio_dir, cleaned_name)
            
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f"Renamed: '{filename}' -> '{cleaned_name}'")
            else:
                print(f"Verified: '{cleaned_name}'")
            count += 1

    print(f"\nDone! Successfully processed {count} audio files.")