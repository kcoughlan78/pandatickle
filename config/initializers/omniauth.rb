Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  provider :twitter, ENV['sMpfbcJVWmSSCL85C2VwZQ'], ENV['SN2bu6HOsC2UIshdTnjnn6M1JhA0jYkMR5p7v7SBhE']
end