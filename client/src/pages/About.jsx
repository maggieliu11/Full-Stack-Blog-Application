export default function About() {
  return (    
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Maggie' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to my blog, a space where I share insights, ideas, and stories on topics that matter to me. 
            </p>

            <p>
            Whether it's a deep dive into the world of technology, reflections on personal growth, or explorations of various interests, you'll find a little bit of everything here.
            </p>

            <p>
            I encourage you to join the conversation! Feel free to leave your thoughts and comments on any post—your perspectives are always valued. 
            </p>

            <p>
            Thank you for being a part of this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
    }