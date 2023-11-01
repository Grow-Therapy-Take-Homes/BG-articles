export function getErrorContent(error: unknown) {
  let title = "No data available";
  let message =
    "Sometimes it can take more than 24 hours for data to be loaded. Either no data exists for the selected date, or it has not been loaded yet.";

  if (error instanceof Error && !error.message.includes("404")) {
    title = "Something went wrong!";
    message = "There was an error loading the content for the date you selected. Please try again.";
  }

  return { title, message };
}
