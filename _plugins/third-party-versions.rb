Jekyll::Hooks.register :site, :after_init do |site|
  # replace {{version}} with the version number in all 3rd party libraries urls
  site.config['third_party_libraries'].each do |key, value|
    value['url'].each do |type, url|
      # check if url is a dictionary
      if url.is_a?(Hash)
        url.each do |type2, url2|
          # replace {{version}} with the version number if it exists
          if url2.include?('{{version}}')
            site.config['third_party_libraries'][key]['url'][type][type2] = url2.gsub('{{version}}', site.config['third_party_libraries'][key]['version'])
          end
        end
      else
        # replace {{version}} with the version number if it exists
        if url.include?('{{version}}')
          site.config['third_party_libraries'][key]['url'][type] = url.gsub('{{version}}', site.config['third_party_libraries'][key]['version'])
        end
      end
    end
  end
end
