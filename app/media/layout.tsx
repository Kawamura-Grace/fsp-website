import MediaHeader from "@/components/media/MediaHeader";
import MediaFooter from "@/components/media/MediaFooter";

export default function MediaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <MediaHeader />
      <main className="flex-1">{children}</main>
      <MediaFooter />
    </div>
  );
}
