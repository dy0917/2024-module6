import UserInfo from "./UserInfo";

export default function ComplexComment({ text, author, date }) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      <UserInfo author={author}></UserInfo>
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {text}
      </div>
      <div className="Comment-date">
        {" "}
        {/* the comment date is another aspect */}
        {date.toLocaleString()}
      </div>
    </div>
  );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx
