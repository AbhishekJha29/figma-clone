import { redirect } from "next/navigation";
import Canvas from "~/components/canvas/Canvas";
import { db } from "~/server/db";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const room = await db.room.findUnique({
        where: { id: id },
        select: {
            title: true,
            ownerId: true,
            roomInvites: {
                select: {
                    user: true,
                },
            },
        },
    });

    if (!room) redirect("/404");

    // TODO: Check if the user has access to the room

    return (
        <Canvas
            roomName={room.title}
            roomId={id}
            othersWithAccessToRoom={room.roomInvites.map((x) => x.user)}
        />
    );
}