require 'test_helper'

class FactsControllerTest < ActionController::TestCase
  test "should get pandafacts" do
    get :pandafacts
    assert_response :success
  end

end
