export function getErrorContent(error: unknown) {
  let title = "Something went wrong!";
  let message =
    "There was an error loading the content for the date you selected. Please try again.";

  if (error instanceof Error && error.message.includes("404")) {
    title = "No data available";
    message =
      "Sometimes it can take more than 24 hours for data to be loaded. Either no data exists for the selected date, or it has not been loaded yet.";
  }

  return { title, message };
}
