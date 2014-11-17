class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :role
  has_many :posts, embed: :ids, include: true
end
