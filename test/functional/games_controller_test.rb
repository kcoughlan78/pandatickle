require 'test_helper'

class GamesControllerTest < ActionController::TestCase
  test "should get pandatickle" do
    get :pandatickle
    assert_response :success
  end

end
