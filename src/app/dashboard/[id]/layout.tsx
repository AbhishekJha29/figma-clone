import { Room } from "~/components/liveblocks/Room";

export default async function DashboardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <Room roomId={"room:" + id}>{children}</Room>;
}
