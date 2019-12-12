require 'app'

describe App do
  
  let(:app) { described_class.new }

  describe '#tenminuteswalk' do
    it 'returns false for a 2 minute walk' do
      expect(app.tenminuteswalk(['w', 's'])).to eq false
    end
  end
end