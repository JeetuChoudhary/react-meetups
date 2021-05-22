import { addNewMeetup } from "../models/MeetupModel";

export const addNewMeetupInDatabase = (meetupData: addNewMeetup) => {
  return fetch("https://my-workground.firebaseio.com/meetups.json", {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchMeetupsFromDatabase = () => {
  return fetch("https://my-workground.firebaseio.com/meetups.json");
};
