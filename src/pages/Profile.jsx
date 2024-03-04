import React, { useState } from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { changeUsername } from "../features/user/userSlice";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect("/login");
  }
  try {
    const response = await customFetch(`/user/profile/${user.id}`);
    const count = response.data.itemCount;
    const userDB = response.data.user;

    return { count, userDB };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const action =
  (store) =>
  async ({ request }) => {
    try {
      const user = store.getState().userState.user;

      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      console.log(data);

      const response = await customFetch.post(`/user/profile/${user.id}`, data);
      store.dispatch(changeUsername(data.username));
      console.log(response);
      return null;
    } catch (error) {
      return null;
    }
  };

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const { count, userDB } = useLoaderData();

  return (
    <>
      {edit ? (
        <div className="align-element bg-base-200 form-control rounded-lg my-6 py-6">
          <h2 className="text-3xl font-semibold uppercase">Your profile</h2>
          <div className="py-4 form-control gap-4">
            <p className="text-lg">Username: </p>
            <p className="font-semibold text-xl">{userDB.username}</p>
            <p className="text-lg">E-mail: </p>
            <p className="font-semibold text-xl">{userDB.email || "not provided"}</p>
            <p className="text-lg">
              Number of items listed:<span className="font-semibold ml-2">{count}</span>
            </p>
          </div>
          <div>
            <button type="button" className="btn btn-primary" onClick={() => setEdit(!edit)}>
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <Form method="POST" className="align-element bg-base-200 form-control rounded-lg my-6 py-6">
          <h2 className="text-3xl font-semibold uppercase">Edit Profile</h2>
          <div className="py-4 form-control gap-4">
            <label className="text-lg">
              Username:
              <input type="text" name="username" defaultValue={userDB.username || ""} className="input input-bordered input-sm bg-base-300 focus:outline-none mx-4" />
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() =>
                setTimeout(() => {
                  setEdit(!edit);
                }, "500")
              }
            >
              Update Profile
            </button>
          </div>
        </Form>
      )}
    </>
  );
};

export default Profile;
