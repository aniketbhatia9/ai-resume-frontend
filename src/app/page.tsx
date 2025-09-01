import ResumeUploadForm from "@/components/ResumeUploadForm";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen w-full bg-gray-100">       
    <main className="flex-1 mt-20">
      <ResumeUploadForm />
    </main>
    <footer className="w-full bg-blue-900 py-4 mt-10">
      <p className="text-center text-white">&copy; 2025 AI Resume Analyzer. All rights reserved.</p>
    </footer>    
    </div>
    </>
  );
//   return(
// <LandingPage/>
//   )
}
