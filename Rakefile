file 'index.html' => 'index.haml' do
  sh 'haml index.haml index.html'
end

file 'app.js' => 'app.coffee' do
  sh 'coffee -c app.coffee > app.js'
end

desc 'build'
task :default => ['index.html', 'app.js'] do
  p 'all ok'
end
