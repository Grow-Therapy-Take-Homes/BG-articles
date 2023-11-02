import { endpoints } from "@api/schema";

describe("template spec", () => {
  beforeEach(() => {
    cy.clock(new Date("10/30/2023"), ["Date"]);
  });

  it("shows appropriate loading states", () => {
    cy.intercept("GET", endpoints.topViews({ date: "2023/10/29" })).as("topviews");

    // We need to slow down the response here to actually test the loading state consistently.
    cy.intercept(
      "GET",
      endpoints.dailyViews({ article: "2023_Cricket_World_Cup", timeframe: "20231001/20231030" }),
      (req) => {
        req.on("response", (res) => {
          res.setDelay(1000);
        });
      },
    );
    cy.intercept("GET", endpoints.summary({ article: "2023_Cricket_World_Cup" }), (req) => {
      req.on("response", (res) => {
        res.setDelay(1000);
      });
    });
    cy.visit("/");

    // Shows loading list items that match the default limit.
    cy.get('[data-testid="list-item-loading"]').should("have.length", 100);
    cy.wait("@topviews");

    cy.get('[data-testid="item-bttn-2023_Cricket_World_Cup"]').click();
    // Shows loading for view stats.
    cy.get('[data-testid="view-stats-loading"]');
    // Shows loading for summary.
    cy.get('[data-testid="summary-loading"]');
  });

  it("shows article error states", () => {
    cy.intercept(
      "GET",
      endpoints.dailyViews({ article: "2023_Cricket_World_Cup", timeframe: "20231001/20231030" }),
      { statusCode: 500 },
    );
    cy.intercept("GET", endpoints.summary({ article: "2023_Cricket_World_Cup" }), {
      statusCode: 500,
    });
    cy.visit("/");

    cy.get('[data-testid="item-bttn-2023_Cricket_World_Cup"]').click();

    cy.get('[data-testid="article-summary-error"]').contains(
      "Failed to load summary for the selected article.",
    );

    cy.get('[data-testid="article-stats-error"]').contains(
      "Failed to load view statistics for the selected article.",
    );
  });

  it("allows searching for a specific date and number of results", () => {
    cy.intercept("GET", endpoints.topViews({ date: "2023/10/29" })).as("topviews");
    cy.visit("/");
    cy.wait("@topviews");

    // Confirm the right date is displayed
    cy.get('[data-testid="date-picker"]').contains("October 29, 2023");
    // Open the date picker
    cy.get('[data-testid="date-picker"]').click();
    // Confirm that the default is selected.
    cy.get('[data-testid="calendar-date-2023/10/29"]').should("have.attr", "aria-selected", "true");
    // Click on a date.
    cy.get('[data-testid="calendar-date-2023/10/18"]').click();
    // Cofirm the right date is now displayed.
    cy.get('[data-testid="date-picker"]').contains("October 18, 2023");
    // Open the results per page picker.
    cy.get('[data-testid="results-per-page-picker"]').click();
    // Confirm the default option is selected.
    cy.get('[data-testid="results-per-page-option-100"]').should(
      "have.attr",
      "aria-selected",
      "true",
    );
    // Select a value.
    cy.get('[data-testid="results-per-page-option-25"]').click();
    cy.intercept("GET", endpoints.topViews({ date: "2023/10/18" })).as("topviews");

    // Submit
    cy.get('[data-testid="search-button"]').click();

    cy.get('[data-testid="list-item-loading"]').should("have.length", 25);
    cy.wait("@topviews");

    cy.get('[data-testid="article-list-item"]').should("have.length", 25);
  });

  it("allows paginating through results", () => {
    cy.intercept("GET", endpoints.topViews({ date: "2023/10/29" })).as("topviews");
    cy.visit("/");
    cy.wait("@topviews");

    // 1st page.
    cy.get('[data-testid="item-bttn-Matthew_Perry"]').contains("1.");
    cy.get(`[data-testid="item-bttn-2024_ICC_Men's_T20_World_Cup"]`).contains("100.");

    cy.get('[data-testid="page-4"]').click();
    cy.get('[data-testid="next-page"]').click();

    // 5th page.
    cy.get('[data-testid="item-bttn-River_Phoenix"]').contains("401.");
    cy.get('[data-testid="item-bttn-Robert_De_Niro"]').contains("500.");

    // Go back to first page.
    cy.get('[data-testid="previous-page"]').click();
    cy.get('[data-testid="page-1"]').click();

    // 1st page.
    cy.get('[data-testid="item-bttn-Matthew_Perry"]').contains("1.");
    cy.get(`[data-testid="item-bttn-2024_ICC_Men's_T20_World_Cup"]`).contains("100.");
  });

  it("shows article details and stats", () => {
    cy.visit("/");

    cy.get('[data-testid="item-bttn-2023_Cricket_World_Cup"]').click();

    //Summary
    cy.get('[data-testid="article-summary"]').contains(
      "The 2023 ICC Men's Cricket World Cup is the 13th edition of the Cricket World Cup",
    );

    // View stats
    cy.get('[data-testid="article-stats-2023_Cricket_World_Cup"]').contains("October 29, 2023");
    cy.get('[data-testid="article-stats-2023_Cricket_World_Cup"]').contains("796,947 views");
    cy.get('[data-testid="article-stats-2023_Cricket_World_Cup"]').contains("October 22, 2023");
    cy.get('[data-testid="article-stats-2023_Cricket_World_Cup"]').contains("792,724 views");
    cy.get('[data-testid="article-stats-2023_Cricket_World_Cup"]').contains("October 23, 2023");
    cy.get('[data-testid="article-stats-2023_Cricket_World_Cup"]').contains("685,762 views");
  });
});
