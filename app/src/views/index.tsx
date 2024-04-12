import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { ReactElement } from "react"
import ItemsList from "../components/ItemsList"

function Home(): ReactElement {
  return (
    <MainLayout>
      <div className="h-full text-black bg-blue-200 p-5 rounded-lg w-2/3 mx-auto text-center flex flex-col gap-10">
        <h1 className="text-5xl">
          Welcome to Postifly!
        </h1>
        <p className="w-full">
          Explore an ever-changing collection of posts from our vast database. Each time you visit, you'll discover something new and interesting. From heartwarming stories to thought-provoking insights, our posts cover a wide range of topics and themes.
        </p>
        <h2 className="text-3xl">
          How it Works:
        </h2>
        <ItemsList items={
          [
            "Simply click on the 'Random Post' button to view a post selected at random from our database.",
            "Enjoy the variety! You never know what you'll find next.",
            "Feel free to share your favorite posts with friends and family."
          ]
        }
        >
        </ItemsList>

        <h2 className="text-3xl">
          Join our Community:
        </h2>
        <ItemsList items={
          [
            "Sign up for an account to save your favorite posts and contribute to discussions.",
            "Connect with other users who share your interests and passions.",
            "Stay updated with the latest posts by following us on social media.."
          ]
        }
        >
        </ItemsList>
        <h2 className="text-3xl">
          Start Exploring:
        </h2>
        <p className="w-full">
          Ready to dive in? Click below to begin your journey through our collection of random posts. Every click brings a new adventure!
        </p>
        <Link to="/posts">Explore Random Posts</Link>
      </div>
    </MainLayout>
  )
}
export default Home