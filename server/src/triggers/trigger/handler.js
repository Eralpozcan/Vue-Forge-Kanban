/**
 * This file was generated using 8base CLI.
 * 
 * To learn more about writing custom trigger functions, visit
 * the 8base documentation at:
 * 
 * https://docs.8base.com/docs/8base-console/custom-functions/triggers/
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    trigger:
 *      ...
 * 
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *  
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local trigger -p src/resolvers/trigger/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local trigger -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock trigger -m [MOCK_FILE_NAME]
 */

module.exports = async (event, ctx) => {
  return {
    data: {
      ...event.data,
      firstName: 'Override firstName',
    },
    /**
     * Triggers allow for errors to be specified in the response
     * as an array of user defined objects.
     *
     * Example:
     *
     * [{ 
     *  message: "Error message", 
     *  code: "error_code" 
     * }, ...]
     */
    errors: [],
  };
};
