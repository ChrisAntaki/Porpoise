class Platform::ContentPage < Platform::Base

  cache!

  def self.preview_element_path(id, prefix_options = {})
    "#{prefix(prefix_options)}#{collection_name}/#{id}/preview.#{format.extension}"
  end

  def self.find_preview(id)
    find(:one, from: preview_element_path(id))
  end
end
