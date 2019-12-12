require 'app'

describe App do

  let(:app) { described_class.new }

  describe '#tenminuteswalk' do
    it 'returns false for a 2 minute walk, not back at starting point' do
      expect(app.tenminuteswalk(['w', 's'])).to eq false
    end

    it 'returns false for a 4 minute walk, not back at starting point' do
      expect(app.tenminuteswalk(['w', 'w', 'e', 's'])).to eq false
    end

    it 'returns true for a 10 minute walk, back at starting point' do
      expect(app.tenminuteswalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).to eq true
    end
  end
end