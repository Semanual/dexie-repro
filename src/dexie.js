import Dexie from 'dexie';
export const db = new Dexie("table");

db.version(1).stores({
    example: "id, value",
});

db.on("ready", async () => {
    await db.example.clear();
    await db.example.add(
        {
            id: 0,
            value: parseInt(Math.random() * 1000)
        }
    );
});
