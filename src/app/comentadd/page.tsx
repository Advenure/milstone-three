'use client'
import { useState } from "react";

export default function CommentSection() {
  // State to hold the comment input value (string)
  const [comment, setComment] = useState<string>("");

  // State to hold the list of comments (array of strings)
  const [comments, setComments] = useState<string[]>([]);

  // Handle comment input change
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  // Handle adding a new comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment(""); // Clear the input after adding the comment
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="mb-4">
        <input
          type="text" // Use "text" instead of "email" for comment input
          placeholder="Add a comment"
          value={comment}
          onChange={handleCommentChange}
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
        />
      </div>
      <button
        onClick={handleAddComment}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Comment
      </button>

      <div className="mt-6 space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md shadow-md">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
