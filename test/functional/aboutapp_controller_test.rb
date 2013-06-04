require 'test_helper'

class AboutappControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
  end

end
