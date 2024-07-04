Feature: Buying a movie ticket
    Scenario: Displaying ticket prices for the Mickey Mouse movie
        Given user is on "/qamid.tmweb.ru/client/index.php" page
        When user selects a film and seats in the cinema hall
        Then user sees the price of tickets