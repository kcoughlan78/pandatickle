class GamesController < ApplicationController

  def new
    @game = Game.new
  end

  def create
    @game = Game.create(params[:game])

    respond_to do |format|
      if @game.save
        format.html { redirect_to games_pandatickle_url, notice: "Score saved"}
      else
        format.html { render action: "pandatickle"}
      end
    end
  end

  def pandatickle
    @game = Game.new
    @games = Game.order("score DESC").paginate(:page => params[:page], :per_page => 10)
  end
end
