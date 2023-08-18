const firebaseUrl =
  "https://nextjs-course-d2a24-default-rtdb.asia-southeast1.firebasedatabase.app/events.json";

export async function getAllEvents() {
  const response = await fetch(firebaseUrl);
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
