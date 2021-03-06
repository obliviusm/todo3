class ProjectsController < ApplicationController
	def index
	  	@projects = Project.all
	  	#@project = Project.new
      	#@task = Task.new
      	respond_to do |format|
			format.html 
			format.js
			format.json
		end
	end

	def show
		@project = Project.find(params[:id])
		@task = Task.new
		@task.project_id = @project.id

		respond_to do |format|
			format.html 
			format.js
			format.json
		end
	end

	def new
		@project = Project.new

		respond_to do |format|
			format.html 
			format.js
			format.json
		end
	end

	def create
		@project = Project.new
    @project.name = 'New TODO List'
		@project.save
		respond_to do |format|
			format.html { redirect_to project_path(@project) }
			format.js
			format.json
		end
	end

	def destroy
		@project  = Project.find(params[:id])
		@project.destroy

		respond_to do |format|
			format.html { redirect_to projects_path}
			format.js
			format.json
		end
	end

	def edit
		@project = Project.find(params[:id])

		respond_to do |format|
			format.html
			format.js
			format.json
		end
	end

	def update
		@project = Project.find(params[:id])
		@project.update(project_params)

		respond_to do |format|
			format.html { redirect_to project_path(@project) }
			format.js
			format.json
		end
	end

	def project_params
    	params.require(:project).permit(:name)
  	end
end
