import LandingPage from "./LandingPage";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Beams */}
      <BackgroundBeamsWithCollision>
        {/* Foreground content */}
        <div className="relative z-10">
          <LandingPage />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}


