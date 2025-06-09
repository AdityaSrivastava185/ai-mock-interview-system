# 🧠 AI-Based Mock Interview System

An intelligent, voice-powered mock interview platform designed for **students**, **developers**, and **professionals** to practice interviews and receive personalized feedback. The system simulates a real interview environment using voice interaction and AI evaluation.

---

## 🚀 Features

- ✍️ **User Authentication** (via Firebase)
- 🗓️ **Schedule Interviews** from dashboard
- 🎤 **Real-Time Voice Interviews** using Vapi
- 🤖 **AI Feedback Generation** using Gemini
- 📚 **Domain-Based Question Tracks** (e.g., Web Development)
- 📈 **Post-Interview Feedback Report**
- 📦 **Free-Tier Support** (with limited access & latency)

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** – React-based framework for frontend
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first responsive UI
- **ShadCN UI** – Reusable component library

### Backend & Auth
- **Firebase Authentication** – User login & sign-up
- **Firebase Realtime Database** – Session, user, and feedback data

### Voice & AI
- **Vapi** – Handles real-time voice-based interview interaction
- **Gemini (Google AI)** – Generates interview questions & feedback logic

---

## 🧩 How It Works

1. **User Registration & Login**
   - Users sign up or log in via Firebase Auth.
   - Once authenticated, they are redirected to their dashboard.

2. **Interview Scheduling**
   - Users can choose a domain and schedule their mock interview.
   - Interviews can be taken anytime after scheduling.

3. **Mock Interview Session**
   - Interview starts via Vapi using voice interaction.
   - AI interviewer asks domain-specific questions.
   - User responds via microphone input.

4. **Feedback & Report**
   - After the session, the system generates a report including:
     - Confidence Score
     - Communication Tips
     - Suggested Reading Resources

---

## 📌 Limitations

> This project is currently hosted under a **free-tier infrastructure**, which may result in:
- Occasional latency
- Limited number of sessions per user
- No advanced analytics (in progress)

---


---

## 📞 Voice & AI Integration

- **Vapi** handles the real-time voice prompts and responses.
- **Gemini AI** processes context-aware prompts and returns dynamic follow-ups and feedback.

---

## 👥 Who Can Use This?

- Final-year students preparing for placements
- Working professionals preparing for job switches
- Anyone looking to improve confidence and communication in interviews

---

## 📌 Upcoming Improvements

- Performance dashboards
- Session history and progress tracking
- Premium tier unlocks with unlimited interviews
- Resume-based question generation

---

## 📬 Contact

For any feedback or feature request, feel free to open an issue or contact the maintainer (ME).

---

**Made with ❤️ using Next.js, Firebase, Vapi, and Gemini AI**

