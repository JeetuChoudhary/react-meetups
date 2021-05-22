import { useRef } from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card/Card";
import { addNewMeetup } from "../../models/MeetupModel";
import { addNewMeetupInDatabase } from "../../utils/data";
import { Container } from "./AddNewMeetup.styles";

const AddNewMeetup = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();

  const handleAddMeetup = (event: React.FormEvent) => {
    event.preventDefault();
    const meetupData: addNewMeetup = {
      title: titleRef.current!.value,
      image: imageRef.current!.value,
      address: addressRef.current!.value,
      description: descriptionRef.current!.value,
    };
    addNewMeetupInDatabase(meetupData).then(() => history.replace("/"));
  };

  return (
    <Container>
      <h1>Add New Meetup</h1>
      <Card>
        <form className="form" onSubmit={handleAddMeetup}>
          <div className="form__item">
            <label htmlFor="title">Meetup Title</label>
            <input
              className="form__item--input"
              type="text"
              id="title"
              required
              ref={titleRef}
            />
          </div>
          <div className="form__item">
            <label htmlFor="image">Meetup Image</label>
            <input
              className="form__item--input"
              type="text"
              id="image"
              required
              ref={imageRef}
            />
          </div>
          <div className="form__item">
            <label htmlFor="address">Meetup Address</label>
            <input
              className="form__item--input"
              type="text"
              id="address"
              required
              ref={addressRef}
            />
          </div>
          <div className="form__item">
            <label htmlFor="desc">Meetup Description</label>
            <textarea
              className="form__item--input"
              name="desc"
              id="desc"
              rows={5}
              required
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className="form__btn">
            <button type="submit">Add Meetup</button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default AddNewMeetup;
