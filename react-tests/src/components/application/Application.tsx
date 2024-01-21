export default function Application() {
  return (
    <div className="bg-gray-100 mx-auto max-w-6xl mt-10 ">
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>Note: all field are mondatory.</p>
      <form className="px-5 py-10 space-y-5">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="py-3 px-6 w-full outline-none focus:border-black"
            placeholder="Fullname"
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            className="py-3 px-6 w-full outline-none focus:border-black"
          />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select
            name="job-location"
            id="job-location"
            className="py-3 px-2 w-full outline-none focus:border-black "
          >
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="UB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="RW">Rwanda</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button className="bg-blue-500 text-white px-10 py-3 hover:bg-blue-600 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
}
