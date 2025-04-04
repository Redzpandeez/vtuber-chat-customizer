import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables for styling
  const [usernameColor, setUsernameColor] = useState("#00ffff");
  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(16);
  const [fontOpacity, setFontOpacity] = useState(1);
  const [bgOpacity, setBgOpacity] = useState(1);
  const [showProfilePic, setShowProfilePic] = useState(true);
  const [chatRole, setChatRole] = useState("normal");
  const [selectedFont, setSelectedFont] = useState("Arial");
  
  // New state variables
  const [showTimestamp, setShowTimestamp] = useState(true);
  const [messages, setMessages] = useState([
    { 
      username: "SakuraChan", 
      content: "Hello everyone! 💖", 
      timestamp: "14:30",
      profilePic: "🌸"
    },
    { 
      username: "TomoBoy", 
      content: "Welcome to the stream!", 
      timestamp: "14:31",
      profilePic: "🎮"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [editProfilePic, setEditProfilePic] = useState("🌸");
  const [timestampFormat, setTimestampFormat] = useState("HH:MM");

  // Predefined role colors
  const roleColors = {
    normal: "#ffffff",
    member: "#1db954",
    admin: "#ffcc00",
    owner: "#ff4500",
  };

  // Google Fonts
  const fontOptions = [
    "Roboto",
    "Arial",
    "Open Sans",
    "Montserrat",
    "Lato",
    "Poppins",
    "Source Sans Pro",
    "Raleway",
    "Oswald",
    "Ubuntu",
    "Comic Sans MS",
    "Impact",
    "Georgia",
    "Courier New",
    "Verdana",
  ];

  // Profile pic options
  const profilePicOptions = ["🌸", "🎮", "🐱", "🐶", "🦊", "👾", "🤖", "👻", "🦄", "🍡"];

  // Function to add a new message
  const addMessage = () => {
    if (newUsername.trim() && newMessage.trim()) {
      const now = new Date();
      const timeString = now.getHours().toString().padStart(2, '0') + ":" + 
                         now.getMinutes().toString().padStart(2, '0');
      
      setMessages([...messages, {
        username: newUsername,
        content: newMessage,
        timestamp: timeString,
        profilePic: editProfilePic
      }]);
      
      setNewMessage("");
      setNewUsername("");
    }
  };

  return (
    <div
      className="App"
      style={{
        padding: "20px",
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h1>VTuber Chat Style Customizer 🎨</h1>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        {/* Style Controls */}
        <div style={{ flex: 1, textAlign: "left", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px" }}>
          <h2>Style Settings</h2>
          
          {/* Basic Styling */}
          <div style={{ marginBottom: "20px" }}>
            <h3>Basic Style</h3>
            {/* Font Selection */}
            <label>
              Font:
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                {fontOptions.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </label>
            <br />

            {/* Font Color & Opacity */}
            <label>
              Text Color:{" "}
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </label>
            <br />
            <label>
              Font Opacity:
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={fontOpacity}
                onChange={(e) => setFontOpacity(e.target.value)}
              />
              <span style={{ marginLeft: "10px" }}>{fontOpacity}</span>
            </label>
            <br />

            {/* Background Color & Opacity */}
            <label>
              Background Color:{" "}
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </label>
            <br />
            <label>
              Background Opacity:
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={bgOpacity}
                onChange={(e) => setBgOpacity(e.target.value)}
              />
              <span style={{ marginLeft: "10px" }}>{bgOpacity}</span>
            </label>
            <br />

            {/* Font Size */}
            <label>
              Font Size:
              <input
                type="range"
                min="12"
                max="32"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              />
              <span style={{ marginLeft: "10px" }}>{fontSize}px</span>
            </label>
            <br />

            {/* Username Color */}
            <label>
              Username Color:{" "}
              <input
                type="color"
                value={usernameColor}
                onChange={(e) => setUsernameColor(e.target.value)}
              />
            </label>
          </div>

          {/* Display Options */}
          <div style={{ marginBottom: "20px" }}>
            <h3>Display Options</h3>
            
            {/* Toggle Profile Picture */}
            <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              Show Profile Pictures:
              <input
                type="checkbox"
                checked={showProfilePic}
                onChange={() => setShowProfilePic(!showProfilePic)}
                style={{ marginLeft: "10px" }}
              />
            </label>
            
            {/* Toggle Timestamp */}
            <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              Show Timestamps:
              <input
                type="checkbox"
                checked={showTimestamp}
                onChange={() => setShowTimestamp(!showTimestamp)}
                style={{ marginLeft: "10px" }}
              />
            </label>
            
            {/* Timestamp Format */}
            <label>
              Timestamp Format:
              <select
                value={timestampFormat}
                onChange={(e) => setTimestampFormat(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
                disabled={!showTimestamp}
              >
                <option value="HH:MM">HH:MM (24h)</option>
                <option value="hh:mm AM/PM">hh:mm AM/PM (12h)</option>
              </select>
            </label>
            <br />

            {/* Chat Role Selection */}
            <label>
              Chat Role:
              <select
                value={chatRole}
                onChange={(e) => setChatRole(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="normal">Normal</option>
                <option value="member">Member</option>
                <option value="admin">Admin</option>
                <option value="owner">Owner</option>
              </select>
            </label>
          </div>

          {/* Message Creation */}
          <div>
            <h3>Add Message</h3>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
              />
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <span>Profile Pic: </span>
                <select
                  value={editProfilePic}
                  onChange={(e) => setEditProfilePic(e.target.value)}
                  style={{ marginLeft: "10px", padding: "5px" }}
                >
                  {profilePicOptions.map(pic => (
                    <option key={pic} value={pic}>{pic}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{ padding: "8px", width: "100%", height: "80px", marginBottom: "10px" }}
              />
              <button 
                onClick={addMessage}
                style={{ padding: "8px 16px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Add Message
              </button>
            </div>
          </div>
        </div>

        {/* Chat Frame (Live Preview) */}
        <div style={{ flex: 1 }}>
          <h2>Live Preview</h2>
          <div
            style={{
              backgroundColor: `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(
                bgColor.slice(3, 5),
                16
              )}, ${parseInt(bgColor.slice(5, 7), 16)}, ${bgOpacity})`,
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              maxHeight: "500px",
              overflowY: "auto",
              fontFamily: selectedFont,
              border: "2px solid white",
              textAlign: "left",
              margin: "0 auto"
            }}
          >
            {/* Chat Messages */}
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {showProfilePic && (
                    <span style={{ marginRight: "8px", fontSize: "24px" }}>
                      {msg.profilePic}
                    </span>
                  )}
                  <span
                    style={{
                      color: usernameColor,
                      fontWeight: "bold",
                      opacity: fontOpacity,
                    }}
                  >
                    {msg.username}:
                  </span>
                  {showTimestamp && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#888",
                        marginLeft: "8px",
                        opacity: fontOpacity * 0.8,
                      }}
                    >
                      {msg.timestamp}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    color: textColor,
                    opacity: fontOpacity,
                    fontSize: `${fontSize}px`,
                    paddingLeft: showProfilePic ? "32px" : "0",
                    wordBreak: "break-word"
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;