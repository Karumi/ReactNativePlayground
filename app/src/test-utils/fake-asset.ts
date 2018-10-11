jest.mock("../assets/asset", () => {
return {
        default: (uri) => uri,
    };
});
