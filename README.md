
## Angular Testing Course
**Jasmine Test Framework**
- Behaviour driven javascript testing framework.
 - Test -> Specifications / Specs
    - Tests a functional feature of our application.
    - Grouped in test suites.
 - ng test 
    - Compiles all application code and specifications.
    - Runs test specifications using Karma test runner.
        - Karma is used internally by Angular Cli 
- ng test --no-watch
    - Runs tests without hot reloading active.
- **Jasmine Spies**
    - spyOn
        - 1st param -> Instance or object to spy on.
        - 2nd param -> method to spy on.
- Only main service should be present in a unit test.
    - Dependency services should be mocked( ie. not injected or instantiated.)
    - **jasmine.createSpyObj**
        - Create a fake instance of a service and specify methods for it.
        - ```const logger = jasmine.createSpyObj('LoggerService', ['Log']);```
        - Keep track of a number of times a function is called.
        - Create a fake implementation of a function and define wat values it should return.
        - Can spy on existing object, or create a complete mock implementation of our dependency.
- **testBed**
    - Provides the dependencies to our services by using dependency injection instead of calling the constructor explicitly.
    - configureTestingModule -> Allows overriding default providers, directives, pipes, modules of the test injector.
    
- Unit test should ONLY test one part of the application.
    - If testing a service, all dependencies for that service should be "mocked" using spy in order to isolate tests and dependencies to the service being tested.
    - Should use dependency injection framework.
- **xdescribe(...)**
    - disabled the complete test suite.
    - x before any function, disables that test.
