import MyLottieComponent from "./components/MyLottieComponent";
import Link from "next/link";

export default function NotFound() {
  // const router = useRouter();
  return (
    <div className="flex min-h-screen p-24">
      <div className="flex flex-col items-center mx-auto gap-2 font-mono text-sm lg:flex">
        <MyLottieComponent />

        <h2 className="text-lg font-bold">Page Not Found</h2>
        <p>Opps, It seems you are lost from the correct path</p>
        <Link href={"/"} className="btn">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
