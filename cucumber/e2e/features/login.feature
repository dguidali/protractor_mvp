Feature: Login
  As a user i want to be able to login to the platform
  I need to have a proper username and password
  So that I can login using my username and password

  Scenario: Login with username and password
    Given I am on the buhler insights platform login page
    When I have logged in with a valid username and password
    Then I should be inside the platform
    When I wait for five seconds and logout from the platform
    Then I should be on the microsoft website