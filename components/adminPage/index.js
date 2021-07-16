import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminPage = () => {
  const router = useRouter();

  const handleButton = async (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const slug = event.target.elements.slug.value;
    const details = event.target.elements.details.value;
    const date = event.target.elements.date.value;

    if (!title || !slug || !details || !date) {
      return toast.error("Please complete all fields! ❌");
    }

    await fetch(`https://www.captadorable.me/api/post/createPost`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        slug: slug,
        details: details,
        date: date,
      }),
    }).then((res) => {
      console.log(res);
      router.push("/blog");
    });
  };

  return (
    <div className="flex flex-col items-center py-36 space-y-8">
      <div className="text-4xl">Create Post!</div>
      <div>
        <form className="flex flex-col space-y-4" onSubmit={handleButton}>
          <div className="flex flex-col space-y-2">
            <div className="text-xl text-gray-300">Title</div>
            <input type="text" className="text-black rounded-lg" name="title" />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="text-xl text-gray-300">Slug</div>
            <input type="text" className="text-black rounded-lg" name="slug" />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="text-xl text-gray-300">Details</div>
            <textarea
              name="details"
              cols="120"
              rows="10"
              className="text-black rounded-lg"
            ></textarea>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="text-xl text-gray-300">Date</div>
            <input type="text" className="text-black rounded-lg" name="date" />
          </div>

          <div className="self-center">
            <button className="w-24 h-12 bg-purple-600 text-xl rounded-lg">
              Submit!
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
