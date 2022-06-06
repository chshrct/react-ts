import { addPost, profileReducer, ProfileStateType } from "./profile-reducer";

describe("profile reducer tests", () => {
  let initState: ProfileStateType;
  beforeEach(() => {
    initState = {
      posts: [
        { id: 1, message: "hello", likeCount: 10 },
        { id: 2, message: "hiho", likeCount: 5 },
      ],
      profile: null,
      status: "",
    };
  });
  it("add post", () => {
    const newState = profileReducer(
      initState,
      addPost({ postMessage: "new Message" })
    );
    const posts = newState.posts;
    expect(posts.length).toBe(3);
    expect(posts.at(-1)?.message).toBe("new Message");
  });
});
